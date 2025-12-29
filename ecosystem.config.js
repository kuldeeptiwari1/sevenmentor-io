module.exports = {
  apps: [
    {
      name: "seven-io",
      cwd: "/var/www/sevenmentor-io-nextjs", // 🔴 change to your real path
      script: "npm",
      args: "start",
      exec_mode: "fork",
      instances: 1,

      // 🔐 Environment
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },

      // 🧠 Memory protection
      node_args: "--max-old-space-size=512",
      max_memory_restart: "700M",

      // 🔄 Stability
      autorestart: true,
      restart_delay: 5000,
      watch: false,

      // 🧾 Logs
      error_file: "/var/log/pm2/seven-io-error.log",
      out_file: "/var/log/pm2/seven-io-out.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss",

      // 🚀 Startup tuning
      min_uptime: "60s",
      max_restarts: 10,
    },
  ],
};
