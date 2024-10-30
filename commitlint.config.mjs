const config = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'wip', 'update', 'fix', 'docs', 'chore', 'style', 'refactor', 'build', 'test', 'perf', 'revert', 'init'],
    ],
  },
};

export default config;
