import DarkMode from "./darkmode";


export const Footer =  () => {
  return (
      <footer className="p-5 flex flex-col ">
          <div className="flex  flex-col md:flex-row gap-9 w-[100%] justify-between ">
            
            <div className="flex gap-4 justify-around md:w-[50%]">
            <ul className="get-to-know text-[0.6em] flex flex-col  gap-4"> 
            <h3 className="font-black">Get to know us</h3>             
              <li className="blog">Blog</li>
              <li className="blog">Faqs</li>
              <li className="blog">How it works</li>
              <li className="blog">Reviews</li>
              <li className="blog">Contact</li>
              <li className="blog">Resources</li>
              <li className="blog">Our Offers</li>
            </ul>

            <ul className="best-in-c text-[0.6em] flex flex-col gap-4">
            <h3 className="font-black">Best in Countries</h3>
                <li className="countries">American</li>
                <li className="countries">Asia Pacific</li>
                <li className="countries">Europe</li>
                <li className="countries">Middle East/Africa</li>
            </ul>

            </div>
 
            <div className="flex gap-4 justify-around md:w-[50%]">
            
            <ul className="fat text-[0.6em] flex flex-col gap-4">
            <h3 className="font-black">Free Academic Tools</h3>             
             <li>Essay Grader</li>
              <li>Essay Typer</li>
              <li>Essay Checker</li>
              <li>Plagiarism Checker</li>
              <li>Grammar Checker</li>
              <li>Paraphrasing Tool</li>
              <li>PDF Summarizer</li>
              <li className="">Annotated Bibliography <br /> Generator</li>
              <li>All Free Tools</li>
            </ul>
            <ul className="citation-tools text-[0.6em] flex flex-col  justify-evenly gap-4">
            <h3 className="font-black">Citation Tools</h3>             
              <li>APA Citation</li>
              <li>Chicago Citation</li>
              <li>Harvard Citation</li>
              <li>MLA Citation</li>
              <li>Vancouver Citation</li>
              <li>Oxford Citation</li>
              <li>Swinburne Citation</li>
              <li>AGLC Citation</li>
              <li>Deakin Citation</li>
              <li>UTS Citation</li>
              <li>Griffith Citation</li>
            </ul>

            </div>

  
          </div>
         <div className="dm-container">
          <DarkMode/> 
         </div>
      </footer>
  );
};
