import DarkMode from "./dmprovider";
import lightModeIcon from '../assets/night-mode-light.png'
import darkModeIcon from '../assets/night-mode-dark.png'


export const Footer =  () => {
  return (
      <footer className="p-5 flex flex-col ">
          <div className="flex  flex-col md:flex-row gap-9 w-[100%] justify-between ">
            
            <div className="flex gap-4 justify-around md:w-[50%]">
            <ul className="get-to-know cursor-pointer text-[0.6em] flex flex-col  gap-4"> 
            <h3 className="font-black text-[1.3em]">Get to know us</h3>             
              <li className="blog">Blog</li>
              <li className="blog">Faqs</li>
              <li className="blog">How it works</li>
              <li className="blog">Reviews</li>
              <li className="blog">Contact</li>
              <li className="blog">Resources</li>
              <li className="blog">Our Offers</li>
            </ul>

            <ul className="best-in-c cursor-pointer text-[0.6em] flex flex-col gap-4">
            <h3 className="font-black text-[1.3em]">Best in Countries</h3>
                <li className="countries">American</li>
                <li className="countries">Asia Pacific</li>
                <li className="countries">Europe</li>
                <li className="countries">Middle East/Africa</li>
            </ul>

            </div>
 
            <div className="flex cursor-pointer gap-4 justify-around md:w-[50%]">
            
            <ul className="fat text-[0.6em] flex flex-col gap-4">
            <h3 className="font-black text-[1.3em]">Free Academic Tools</h3>             
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
            <h3 className="font-black text-[1.3em]">Citation Tools</h3>             
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
          {/* <DarkMode/>  */}
  
         </div>

         <div className="contact-nd-extras cursor-pointer  text-[0.6em] md:text-[1em] flex w-[100%] justify-around gap-4 pt-5">
            <div className="flex flex-col gap-2">
                <div className="pb-1 flex gap-2">
                Contact us
                  <div className="ph-wrap">
                  <img width="14" height="14" src="https://cdn1.myassignmenthelp.com/seo-revamp-assets/footer-ph.svg" data-src="https://cdn1.myassignmenthelp.com/seo-revamp-assets/footer-ph.svg" alt="icon" title="footer-ph" className="loaded" data-was-processed="true"/>
                  </div>
                </div>
                <div className="social-sec flex gap-4">
                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/myassignmenthelpus/">
                    <img width="9" height="15" src="https://cdn1.myassignmenthelp.com/seo-revamp-assets/facebook.svg" data-src="https://cdn1.myassignmenthelp.com/seo-revamp-assets/facebook.svg" alt="facebook" title="facebook" className="loaded" data-was-processed="true"/>
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://twitter.com/myassignmentau">
                    <img width="15" height="12" src="https://cdn1.myassignmenthelp.com/seo-revamp-assets/Twittericon.svg" data-src="https://cdn1.myassignmenthelp.com/seo-revamp-assets/Twittericon.svg" alt="Twitter" title="Twitter" className="loaded" data-was-processed="true"/>
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UC49KwAi54T9SJ0aZuEee5bQ">
                    <img width="15" height="10" src="https://cdn1.myassignmenthelp.com/seo-revamp-assets/youtubeicon.svg" data-src="https://cdn1.myassignmenthelp.com/seo-revamp-assets/youtubeicon.svg" alt="youtube" className="loaded" data-was-processed="true"/>
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.pinterest.com/Myassignmentau/">
                    <img width="12" height="15" src="https://cdn1.myassignmenthelp.com/seo-revamp-assets/pinteresticon.svg" data-src="https://cdn1.myassignmenthelp.com/seo-revamp-assets/pinteresticon.svg" alt="pinterest-icon" title="pinterest-icon" className="loaded" data-was-processed="true"/>
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/myassignmenthelpofficial/">
                    <img width="15" height="15" src="https://cdn1.myassignmenthelp.com/seo-revamp-assets/instagram.svg" data-src="https://cdn1.myassignmenthelp.com/seo-revamp-assets/instagram.svg" alt="instagram" title="instagram" className="loaded" data-was-processed="true"/>
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@myassignmenthelpofficial">
                    <img width="15" height="15" src="https://cdn1.myassignmenthelp.com/seo-revamp-assets/tik-tok-social.svg" data-src="https://cdn1.myassignmenthelp.com/seo-revamp-assets/tik-tok-social.svg" alt="Tiktok" title="Tiktok" className="loaded" data-was-processed="true"/>
                    </a>
                </div>
            </div>
          
              <div className="flex flex-col gap-2">
                  <div className="list-heading2 pb-1">
                Order on the go!
                </div>
                <div className="list-sub-heading2">Say hello to our app</div>
                  <div className="app-store-main flex gap-4">
                <a href="https://apps.apple.com/mu/app/myassignmenthelpapp/id1544440098" target="_blank" rel="noreferrer">
                <img width="101" height="30" alt="secure payment" className="mr-3 loaded" src="https://cdn1.myassignmenthelp.com/lazyload-assets/2021/appPromotion/app-store.svg" data-src="https://cdn1.myassignmenthelp.com/lazyload-assets/2021/appPromotion/app-store.svg" data-was-processed="true" title="secure payment"/>
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.myassigmenthelp&amp;hl=en_IN&amp;gl=US" target="_blank" rel="noreferrer">
                <img width="101" height="30" alt="secure payment" src="https://cdn1.myassignmenthelp.com/lazyload-assets/2021/appPromotion/playStore.svg" data-src="https://cdn1.myassignmenthelp.com/lazyload-assets/2021/appPromotion/playStore.svg" className="loaded" data-was-processed="true" title="secure payment"/>
                </a>
                </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="pay-head">
              100% Secure Pay
              </div>
              <img width="190" height="26" alt="secure payment" src="https://cdn1.myassignmenthelp.com/seo-revamp-assets/secure-payment.svg" data-src="https://cdn1.myassignmenthelp.com/seo-revamp-assets/secure-payment.svg" title="secure-payment" className="loaded" data-was-processed="true"/>
              <a href="https://www.dmca.com/Protection/Status.aspx?ID=c33c33ba-98f5-4bd8-a2b1-57d5f2471f7b" title="DMCA.com Protection Status" className="dmca-badge"> <img height="30" width="150" src="https://images.dmca.com/Badges/dmca-badge-w250-5x1-01.png?ID=c33c33ba-98f5-4bd8-a2b1-57d5f2471f7b" data-src="https://images.dmca.com/Badges/dmca-badge-w250-5x1-01.png?ID=c33c33ba-98f5-4bd8-a2b1-57d5f2471f7b" alt="DMCA.com Protection Status" className="lazy loaded" data-was-processed="true"/></a>
            </div>

        </div>

          <div className="terms cursor-pointer pt-6">
            <ul className="flex text-[0.5em] md:text-[0.9em] w-[100%] justify-evenly">
              <li>
              <a href="">Term of use</a>
              </li>
              <li className="sep">|</li>
              <li>
              <a href="">Privacy policy</a>
              </li>
              <li className="sep">|</li>
              <li>
              <a href="">Revision &amp; Refund policy</a>
              </li>
              <li className="sep">|</li>
              <li>
              <a href=""> Fair use policy</a>
              </li>
            </ul>
          </div>

  
      </footer>
  );
};
