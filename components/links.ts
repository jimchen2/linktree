import { Link } from './types';

export const links: Link[] = [
  { name: "Blog", icon: "nextjs.png", url: "https://jimchen.me", category: "Apps" },
  { name: "Markdown Parser", icon: "nextjs.png", url: "https://markdown.jimchen.me", category: "Apps" },
  { name: "Git Server", icon: "gitea.png", url: "https://git.jimchen.me/explore/repos", category: "Apps" },
  { name: "Docker-Self-Hosted", icon: "docker.svg", url: "./self-hosted", category: "Apps" },
  { name: "AWS Mail", icon: "aws.svg", url: "mailto:info@jimchen.me", category: "Social" },
    { name: "WeChat", icon: "wechat.svg", url: "./qr_code/wechat.jpeg", isQR: true, category: "Social" },
  { name: "QQ", icon: "tencentqq.svg", url: "./qr_code/qq.jpg", isQR: true, category: "Social" },
  { name: "RSS Feed", icon: "rss.svg", url: "https://jimchen.me/api/rss", category: "Social" },
  { name: "GitHub", icon: "github.svg", url: "https://github.com/jimchen2", category: "Tech" },
  { name: "Kaggle", icon: "kaggle.webp", url: "https://www.kaggle.com/jc4214", category: "Tech" },
  { name: "Docker Hub", icon: "docker.svg", url: "https://hub.docker.com/u/jimchen2", category: "Tech" },
  { name: "Hugging Face", icon: "huggingface.svg", url: "https://huggingface.co/jimchen2", category: "Tech" },
];
