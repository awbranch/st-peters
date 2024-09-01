import React from "react";
import { Block as BlockType } from "@/types/Block";
import ComponentList from "@/components/ComponentList";
import Section from "@/components/Section";

type BlockProps = Omit<BlockType, "_type" | "_key"> & {
  first?: boolean;
};

export default function Block({
  id,
  hidden,
  palette,
  components,
  maxWidth = "lg",
}: BlockProps) {
  if (hidden) return null;

  return (
    <Section
      id={id.current}
      palette={palette}
      maxWidth={maxWidth}
    >
      {components && <ComponentList components={components} />}
    </Section>
  );
}
