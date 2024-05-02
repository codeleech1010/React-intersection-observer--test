// import { useInView } from "react-intersection-observer";

// const Section = ({ id }) => {
//     const { ref, inView } = useInView();
  
//     return (
//       <section ref={ref} id={id} className={inView ? 'active' : ''}>
//         {/* Your section content */}
//       </section>
//     );
//   };
  
//   export default Section

import { useInView } from 'react-intersection-observer';

const Section = ({ id, children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section ref={ref} id={id} className={inView ? 'active' : ''}>
      {children}
    </section>
  );
};

export default Section;
