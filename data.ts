// 默认命令
const defaults = {
  channel: 'weapp',
  env: 'dev',
  version: 'preview',
};

// preview
const command_combine = [
  'npm run build:weapp:dev:preview',
  'npm run build:weapp:qa:preview',
  'npm run build:weapp:pre:preview',
  'npm run build:weapp:prod:preview',
  'npm run build:alipay:dev:preview',
  'npm run build:alipay:qa:preview',
  'npm run build:alipay:pre:preview',
  'npm run build:alipay:prod:preview',
  'npm run build:weapp:dev:upload',
  'npm run build:weapp:qa:upload',
  'npm run build:weapp:pre:upload',
  'npm run build:weapp:prod:upload',
  'npm run build:alipay:dev:upload',
  'npm run build:alipay:qa:upload',
  'npm run build:alipay:pre:upload',
  'npm run build:alipay:prod:upload',
];

const { env, channel, version } = defaults;

const aa = command_combine.filter((item) => item.includes(env));
console.log('%c AT-[ aa ]-31', 'font-size:13px; background:#de4307; color:#f6d04d;', aa);

const bb = aa.filter((item) => item.includes(channel));
console.log('%c AT-[ bb ]-34', 'font-size:13px; background:#de4307; color:#f6d04d;', bb);

const cc = bb.filter((item) => item.includes(version));
console.log('%c AT-[ cc ]-37', 'font-size:13px; background:#de4307; color:#f6d04d;', cc);
