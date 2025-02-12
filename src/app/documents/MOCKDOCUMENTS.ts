import {Document} from './document.model';

export const MOCKDOCUMENTS: any[] = [
  {
    id: "1",
    name: "Engineering Document Repository",
    url: "https://docs.engineering.com/repo",
    children: [
      {
        id: "2",
        name: "Product Specs",
        url: "https://docs.engineering.com/specs"
      },
      {
        id: "3",
        name: "Design Guidelines",
        url: "https://docs.engineering.com/design"
      }
    ]
  },
  {
    id: "10",
    name: "Sales Documents",
    url: "https://docs.sales.com",
    children: [
      {
        id: "11",
        name: "Q1 Sales Overview",
        url: "https://docs.sales.com/q1"
      }
    ]
  },
  {
    id: "20",
    name: "Marketing Materials",
    url: "https://docs.marketing.com",
    children: [
      {
        id: "21",
        name: "Brand Guidelines",
        url: "https://docs.marketing.com/brand"
      }
    ]
  },
  {
    id: "30",
    name: "HR Documents",
    url: "https://docs.hr.com"
  },
  {
    id: "40",
    name: "Finance Reports",
    url: "https://docs.finance.com"
  }
];
