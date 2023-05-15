declare type MixinConfig = Record<string, any>;
declare const createMixins: (
  additionalMixins?: Record<string, any> | undefined
) => MixinConfig;
export default createMixins;
export { MixinConfig };
