import ServiceCard from "../../../../../_components/ServiceCard";
import { services } from "../../_data";

export default function Cards() {
  return (
    <section className="space-y-12">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
          tags={service.tags}
          imageSrc={service.imageSrc}
          imageAlt={service.imageAlt}
          backgroundImage={service.backgroundImage}
          titleHighlightSrc={service.titleHighlightSrc}
          orientation={service.orientation}
          imageClassName={service.imageClassName}
        />
      ))}
    </section>
  );
}
