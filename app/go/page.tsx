import { redirect } from "next/navigation";

export default function GoPage() {
  // Μπορείς να αλλάξεις ή να προσθέσεις όσα links θέλεις
  const offers = [
    "https://www.amazon.com/best-sellers",
    "https://www.aliexpress.com/",
    "https://www.bluehost.com/",
    "https://www.fiverr.com/",
    "https://www.shopify.com/",
    "https://www.canva.com/",
  ];

  // Τυχαίο affiliate link
  const random = offers[Math.floor(Math.random() * offers.length)];

  redirect(random);
}
