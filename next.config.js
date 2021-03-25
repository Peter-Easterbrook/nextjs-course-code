const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'Peter',
        mongodb_password: 'Rhinocerous1',
      },
    };
  }

  return {
    env: {
      mongodb_username: 'Peter',
      mongodb_password: 'Rhinocerous1',
    },
  };
};
