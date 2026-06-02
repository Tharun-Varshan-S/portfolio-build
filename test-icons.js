const fs = require('fs');
const si = require('react-icons/si');
const icons = [
  'SiReact', 'SiNextdotjs', 'SiTypescript', 'SiJavascript', 'SiHtml5', 'SiCss3', 'SiTailwindcss', 'SiVite',
  'SiNodedotjs', 'SiExpress', 'SiFastapi', 'SiPython', 'SiJava',
  'SiMongodb', 'SiPostgresql', 'SiMysql', 'SiRedis',
  'SiGooglegemini', 'SiScikitlearn', 'SiPandas', 'SiNumpy', 'SiJupyter',
  'SiGit', 'SiGithub', 'SiDocker', 'SiPostman', 'SiVisualstudiocode', 'SiLinux',
  'SiAmazonwebservices', 'SiAmazon', 'SiAmazonaws', 'SiNginx', 'SiKubernetes'
];
icons.forEach(i => {
  if (!si[i]) console.log('MISSING:', i);
});
