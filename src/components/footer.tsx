import DarkMode from "./darkmode";


export const Footer =  () => {
  return (
      <footer className="p-5 w-100 flex place-content-start">
         <div className="dm-container">
         <DarkMode/> 
         </div>
      </footer>
  );
};