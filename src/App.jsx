import CoreConcept from "./assets/coreConcepts/CoreConcept";
import ComponentImage from "./assets/components.png";
import Jsx from "./assets/jsx-ui.png";
import Props from "./assets/config.png";
import State from "./assets/state-mgmt.png";  
import { useState } from "react";
import Image from "./assets/react-core-concepts.png";
import CoreHeader from "./assets/Header/header";


function App() {
  const topHeader = 
    {
      img: Image,
      title: 'React Essentials',
      description: 
      'Fundamental React concepts you will need for almost any app you are going to build!'
    }
  ;
  const [components, setComponents] = useState(
    [
      {
          image: ComponentImage,
          title: 'Components',
          description: 
          'The core UI building block - compose the user interface by combining multiple components.'
      },
      {
        image: Jsx,
        title: 'JSX',
        description: 
          'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.'
      },
      {
        image: Props,
        title: 'Props',
        description: 
          'Make components configurable (and therefore reusable) by passing input data to them.'
      },
      {
        image: State,
        title: 'State',
        description: 
          'React-managed data which, when cahnged, causes the component to re-render & the UI to update.'
      }
    ]
  );
  return (
    <div>
      <main>
        <header>
        <CoreHeader
        img={topHeader.img}
        title={topHeader.title}
        description={topHeader.description}
          />
    </header>
        <section id="core-concepts">
          <ul>
            {components.map((components)  => {
              console.log(components);
              return (
              <CoreConcept 
            image={components.image}
            title={components.title}
            description={components.description}
          />
            );
        })}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
