import Section from '@/components/Section';

export default function Example() {
  return (
    <>
      <Section>
        <h1 className={'text-5xl font-bold mt-8 mb-6'}>Urgent Needs</h1>
        <p className={'text-lg leading-relaxed opacity-80 mb-6'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <ul className={'list-disc mt-2 mb-3 ml-2'}>
          <li>Peanut butter or other nut butters</li>
          <li>Powdered milk or shelf-stable milk alternatives</li>
        </ul>
      </Section>
      <Section>
        <h1 className="text-3xl xs:text-4xl sm:text-5xl font-bold mt-8 mb-6">
          Food Pantry Needs
        </h1>
        <div className={'columns-1 gap-x-10 md:columns-2 space-y-10'}>
          <div className={'break-inside-avoid-column'}>
            <p className="text-base leading-relaxed mb-6">
              <strong className="font-semibold">Canned Protein</strong>
            </p>
            <ul className="list-disc mt-2 mb-3 ml-6">
              <li>Tuna, salmon, chicken, turkey,</li>
              <li>Black beans, kidney beans, lentils</li>
              <li>Peanut butter or other nut butters</li>
            </ul>
          </div>
          <div className={'break-inside-avoid-column'}>
            <p className="text-base leading-relaxed mb-6">
              <strong className="font-semibold">
                Canned Fruits and Vegetables
              </strong>
            </p>
            <ul className="list-disc mt-2 mb-3 ml-6">
              <li>
                Fruits such as peaches, pears, apple sauce, fruit cocktail.
              </li>
              <li>Canned vegetables (low-sodium if possible)</li>
            </ul>
          </div>
          <div className={'break-inside-avoid-column'}>
            <p className="text-base leading-relaxed mb-6">
              <strong className="font-semibold">Whole Grains</strong>
            </p>
            <ul className="list-disc mt-2 mb-3 ml-6">
              <li>Rice (brown or white)</li>
              <li>Whole grain pasta</li>
              <li>Oats (old-fashioned or instant)</li>
            </ul>
          </div>
          <div className={'break-inside-avoid-column'}>
            <p className="text-base leading-relaxed mb-6">
              <strong className="font-semibold">
                Cereal and Breakfast Items
              </strong>
            </p>
            <ul className="list-disc mt-2 mb-3 ml-6">
              <li>Whole grain cereal</li>
              <li>Oatmeal</li>
              <li>Granola bars</li>
              <li>Instant breakfast drinks</li>
            </ul>
          </div>
          <div className={'break-inside-avoid-column'}>
            <p className="text-base leading-relaxed mb-6">
              <strong className="font-semibold">Shelf-Stable Dairy</strong>
            </p>
            <ul className="list-disc mt-2 mb-3 ml-6">
              <li>Powdered milk or shelf-stable milk alternatives</li>
              <li>Evaporated milk</li>
            </ul>
          </div>
          <div className={'break-inside-avoid-column'}>
            <p className="text-base leading-relaxed mb-6">
              <strong className="font-semibold">Canned Soups and Stews</strong>
            </p>
            <ul className="list-disc mt-2 mb-3 ml-6">
              <li>Low-sodium soups</li>
              <li>Hearty stews</li>
              <li>Chili</li>
            </ul>
          </div>
          <div className={'break-inside-avoid-column'}>
            <p className="text-base leading-relaxed mb-6">
              <strong className="font-semibold">Cooking Staples</strong>
            </p>
            <ul className="list-disc mt-2 mb-3 ml-6">
              <li>Cooking oil (vegetable, olive, etc.)</li>
              <li>Flour</li>
              <li>Sugar</li>
              <li>Salt and pepper</li>
              <li>Spices (e.g., garlic powder, onion powder, cumin)</li>
            </ul>
          </div>
          <div className={'break-inside-avoid-column'}>
            <p className="text-base leading-relaxed mb-6">
              <strong className="font-semibold">
                Hygiene and Personal Care Items
              </strong>
            </p>
            <ul className="list-disc mt-2 mb-3 ml-6">
              <li>Toothpaste and toothbrushes</li>
              <li>Shampoo and conditioner</li>
              <li>Soap</li>
              <li>Toilet paper</li>
            </ul>
          </div>
          <div className={'break-inside-avoid-column'}>
            <p className="text-base leading-relaxed mb-6">
              <strong className="font-semibold">Snack Items</strong>
            </p>
            <ul className="list-disc mt-2 mb-3 ml-6">
              <li>Nuts and seeds</li>
              <li>Trail mix</li>
              <li>Dried fruit</li>
              <li>Crackers</li>
            </ul>
          </div>
          <div className={'break-inside-avoid-column'}>
            <p className="text-base leading-relaxed mb-6">
              <strong className="font-semibold">Sauces and Condiments</strong>
            </p>
            <ul className="list-disc mt-2 mb-3 ml-6">
              <li>Pasta sauce</li>
              <li>Ketchup</li>
              <li>Mustard</li>
              <li>Mayonnaise</li>
            </ul>
          </div>
        </div>
      </Section>
      <Section>
        <h1 className="text-3xl xs:text-4xl sm:text-5xl font-bold mt-8 mb-6">
          School Supply Needs
        </h1>
        <ul className="list-disc mt-2 mb-3 ml-6">
          <li>Backpacks</li>
          <li>Pencils (traditional and/or mechanical)</li>
          <li>Erasers</li>
          <li>Pens (blue, black, and red)</li>
          <li>Highlighters (various colors</li>
          <li>Colored pencils</li>
          <li>Markers</li>
          <li>Crayons</li>
          <li>Dry-erase markers (for whiteboards)</li>
          <li>Sharpener (if using traditional pencils)</li>
          <li>Ruler (with both metric and imperial measurements)</li>
        </ul>
      </Section>
    </>
  );
}
