import { useInView } from 'react-intersection-observer';

const DynamicHeader = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.5, // Trigger when at least 50% of the element is visible
  });

  return (
    <header ref={ref} className={inView ? 'active' : ''}>
      <nav>
        <a href="#section1">Section 1</a>
        {" "}
        <a href="#section2">Section 2</a>
        <a href="#section3">Section 3</a>
        <a href="#section4">Section 4</a>
        {/* Add more menu items */}
      </nav>
    </header>
  );
};

export default DynamicHeader;
