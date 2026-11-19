import { paths } from "../home";
import { Carousel, Card } from "./ui/apple-cards-carousel";

export function HomeCarousel() {
  return <Carousel items={paths.map((path, index) => (
    <Card key={path.name} index={index} href={path.href} card={{ category: path.name, title: path.title, description: path.description, src: "", content: null }} />
  ))} />;
}
