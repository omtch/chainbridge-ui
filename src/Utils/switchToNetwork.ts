import { BigNumber } from "@ethersproject/bignumber";
import { hexStripZeros } from "@ethersproject/bytes";
import { Web3Provider } from "@ethersproject/providers";
import { chainbridgeConfig } from "../chainbridgeConfig";

interface SwitchNetworkArguments {
  chainId: number;
}

// provider.request returns Promise<any>, but wallet_switchEthereumChain must return null or throw
// see https://github.com/rekmarks/EIPs/blob/3326-create/EIPS/eip-3326.md for more info on wallet_switchEthereumChain
export async function switchToNetwork({
  chainId,
}: SwitchNetworkArguments): Promise<null | void> {
  if (!(window as any)?.ethereum || !chainId) return;
  const formattedChainId = hexStripZeros(BigNumber.from(chainId).toHexString());
  try {
    await (window as any)?.ethereum?.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: formattedChainId }],
    });
  } catch (error) {
    // 4902 is the error code for attempting to switch to an unrecognized chainId
    if (error.code === 4902) {
      const targetChain = chainbridgeConfig.chains.find(
        (chain) => chain.networkId === chainId
      );
      await (window as any)?.ethereum?.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: formattedChainId,
            chainName: targetChain?.name,
            rpcUrls: [targetChain?.rpcUrl],
            nativeCurrency: {
              name: targetChain?.nativeTokenSymbol,
              symbol: targetChain?.nativeTokenSymbol,
              decimals: 18,
            },
            blockExplorerUrls: [targetChain?.blockExplorer],
          },
        ],
      });
      // metamask (only known implementer) automatically switches after a network is added
      // the second call is done here because that behavior is not a part of the spec and cannot be relied upon in the future
      // metamask's behavior when switching to the current network is just to return null (a no-op)
      try {
        await ((window as any)?.ethereum as any)?.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: formattedChainId }],
        });
      } catch (error) {
        console.debug("Added network but could not switch chains", error);
      }
    } else {
      throw error;
    }
  }
}
