import laptopImage from "@/assets/laptop-hero.jpg";
import headphonesImage from "@/assets/headphones.jpg";
import powerbankImage from "@/assets/powerbank.jpg";
import backpackImage from "@/assets/backpack.jpg";
import mouseImage from "@/assets/mouse.jpg";

export const mockProducts = [
  {
    id: "laptop-1",
    title: "Dell Inspiron 15 3000 AMD Ryzen 5 Laptop",
    brand: "Dell",
    price: 45999,
    originalPrice: 52999,
    rating: 4.3,
    reviewCount: 2847,
    image: laptopImage,
    whyForYou: "Perfect balance of performance and budget for college work and light video editing with Premiere Pro",
    pros: [
      "AMD Ryzen 5 handles Premiere Pro smoothly",
      "8GB RAM expandable to 16GB",
      "Lightweight at 1.83kg for campus carry",
      "Good keyboard for long typing sessions"
    ],
    cons: [
      "Display could be brighter for outdoor use",
      "Battery life around 6 hours with heavy use"
    ],
    category: "Laptops"
  },
  {
    id: "laptop-2", 
    title: "ASUS VivoBook 14 Intel Core i5 11th Gen",
    brand: "ASUS",
    price: 47999,
    originalPrice: 54999,
    rating: 4.2,
    reviewCount: 1923,
    image: laptopImage,
    whyForYou: "Intel graphics and solid build quality make this reliable for your Premiere Pro projects under budget",
    pros: [
      "Intel Iris Xe graphics boost video rendering",
      "Fingerprint login for quick access",
      "Full-size keyboard with numpad",
      "Multiple connectivity ports"
    ],
    cons: [
      "Pre-installed bloatware needs cleanup",
      "Fan gets loud during intensive tasks"
    ],
    category: "Laptops"
  },
  {
    id: "headphones-1",
    title: "Sony WH-CH720N Wireless Noise Canceling Headphones",
    brand: "Sony",
    price: 8990,
    originalPrice: 12990,
    rating: 4.4,
    reviewCount: 5623,
    image: headphonesImage,
    whyForYou: "Great for focusing during study sessions and enjoying media with excellent sound quality in your budget",
    pros: [
      "Active noise cancellation blocks distractions",
      "35-hour battery life lasts weeks",
      "Comfortable for long wear",
      "Quick charge: 3min = 1hr playback"
    ],
    cons: [
      "Build feels slightly plasticky",
      "ANC not as strong as premium models"
    ],
    category: "Audio"
  },
  {
    id: "powerbank-1",
    title: "Mi Power Bank Hypersonic 20000mAh 50W",
    brand: "Mi",
    price: 2499,
    originalPrice: 2999,
    rating: 4.5,
    reviewCount: 8934,
    image: powerbankImage,
    whyForYou: "Essential for college life - charges your laptop and phone multiple times with fast charging support",
    pros: [
      "Can charge laptops with 50W output",
      "Charges phone 4-5 times fully",
      "Digital display shows exact battery %",
      "Multiple device charging simultaneously"
    ],
    cons: [
      "Heavy at 434g - not pocket-friendly",
      "Takes 4+ hours to fully charge itself"
    ],
    category: "Accessories"
  },
  {
    id: "backpack-1",
    title: "American Tourister Laptop Backpack 32L",
    brand: "American Tourister",
    price: 1899,
    originalPrice: 2799,
    rating: 4.3,
    reviewCount: 3456,
    image: backpackImage,
    whyForYou: "Perfect size for college essentials with dedicated laptop protection and comfortable daily carry",
    pros: [
      "Fits 15.6 inch laptops safely",
      "Water-resistant material",
      "Multiple compartments for organization",
      "Padded shoulder straps"
    ],
    cons: [
      "Zippers feel slightly cheap",
      "No external water bottle holder"
    ],
    category: "Bags"
  },
  {
    id: "mouse-1",
    title: "Logitech MX Master 3S Wireless Mouse",
    brand: "Logitech",
    price: 7995,
    originalPrice: 9995,
    rating: 4.6,
    reviewCount: 2156,
    image: mouseImage,
    whyForYou: "Premium productivity mouse that will speed up your Premiere Pro workflow with custom shortcuts",
    pros: [
      "Precise scroll wheel for timeline scrubbing",
      "Customizable buttons for shortcuts",
      "Works on any surface, even glass",
      "70-day battery life"
    ],
    cons: [
      "Price might be high for students",
      "Large size may not suit small hands"
    ],
    category: "Accessories"
  }
];