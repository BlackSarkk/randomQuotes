module.exports = {
  apps: [
    {
      name: "server-dev",
      cwd: "./server",       // folder where npm run dev should run
      script: "npm",
      args: "run dev",
      watch: true,
      env: {
        NODE_ENV: "development"
      }
    },
    {
      name: "public-dev",
      cwd: "./public",       // folder where npm run dev should run
      script: "npm",
      args: "run dev",
      watch: true,
      env: {
        NODE_ENV: "development"
      }
    }
  ],

  deploy: {
    production: {
      user: "SSH_USERNAME",
      host: "SSH_HOSTMACHINE",
      ref: "origin/master",
      repo: "GIT_REPOSITORY",
      path: "DESTINATION_PATH",
      "pre-deploy-local": "",
      "post-deploy": "npm install && pm2 reload ecosystem.config.js --env production",
      "pre-setup": ""
    }
  }
};

