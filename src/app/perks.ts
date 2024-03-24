import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";

export interface Perk {
  name: string;
  description: string;
  icon: any;
}

export const perks: Perk[] = [
  {
    name: "Free Shipping",
    description: "Get your items delivered for free with no minimum purchase.",
    icon: ArrowDownToLine,
  },
  {
    name: "Premium Content",
    description: "Access to exclusive high-definition stock photos and videos.",
    icon: CheckCircle,
  },
  {
    name: "Early Access",
    description: "Get early access to newly released digital templates and assets.",
    icon: Leaf,
  },
]