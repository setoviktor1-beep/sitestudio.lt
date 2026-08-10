export type PortfolioProject = {
  id: "leonamai" | "situacija" | "mini-social" | "futtech-store" | "teisine-atrama";
  name: string;
  liveUrl: string;
  domain: string;
  image: string;
  caseStudy: string;
  status: "client" | "own";
};

// The order intentionally matches every dict.works.items array.
export const portfolioProjects: PortfolioProject[] = [
  { id: "leonamai", name: "Leonamai", liveUrl: "https://leonamai.lt", domain: "leonamai.lt", image: "/works/leonamai.png", caseStudy: "/darbai/leonamai", status: "client" },
  { id: "situacija", name: "Situacija", liveUrl: "https://situacija.eu", domain: "situacija.eu", image: "/works/situacija.png", caseStudy: "/darbai/situacija", status: "client" },
  { id: "mini-social", name: "MiniSocial", liveUrl: "https://mini-social.online", domain: "mini-social.online", image: "/works/mini-social.png", caseStudy: "/darbai/mini-social", status: "own" },
  { id: "futtech-store", name: "FutTech", liveUrl: "https://futtech.store", domain: "futtech.store", image: "/works/futtech-store.png", caseStudy: "/darbai/futtech-store", status: "own" },
  { id: "teisine-atrama", name: "Teisinė Atrama", liveUrl: "https://xn--teisinatrama-jvb.lt", domain: "teisinėatrama.lt", image: "/works/teisine-atrama.png", caseStudy: "/darbai/teisine-atrama", status: "client" },
];

