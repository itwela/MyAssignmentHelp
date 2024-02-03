import React from "react";

export const Form = () => {
  return (
    <>
      <div className="form-wrapper flex flex-col gap-8">
      <p className="text-center flex flex-col ">
        It’s time you sought help from
        <span>MyAssignmentHelp.com Experts</span>
      </p>
      <section className="w-[100%] flex flex-col rounded-[1.5em] gap-3">
        <div className="__form-container flex flex-col place-items-center place-content-center gap-4">
          <form
            id="bannerformgoogle"
            method="post"
            autoComplete="off"
            action="https://myassignmenthelp.com/Home/"
            className="__Form mt-3"
            noValidate
          >
            <input type="hidden" value="136.55.56.166" id="ip" name="ip" data-fillr-id="378545248" />
            <input type="hidden" value="Atlanta" id="address" name="address" data-fillr-id="1303921907" />
            <input type="hidden" value="Georgia" id="region" name="region" data-fillr-id="401150687" />
            <input type="hidden" value="United States" id="country" name="country" data-fillr-id="1233606505" />
            <input type="hidden" name="noredirect" value="1" data-fillr-id="1483577570" />
            <input type="hidden" name="uniqueEmail" id="uniqueEmail" data-fillr-id="535910972" />
            <input type="hidden" id="jsCheck" name="jsCheck" value="1" data-fillr-id="1822655046" />
            <input type="hidden" id="marketing" name="marketing" value="Yes" data-fillr-id="1044897587" />
            <input type="hidden" name="referal" value="home page" data-fillr-id="451831342" />
            <input type="hidden" name="repcampaign" value="" data-fillr-id="1392482279" />
            <input type="hidden" value="250" id="word_limit" name="word_limit" data-fillr-id="1305303043" />
            <input type="hidden" name="pageurl" value="myassignmenthelp.com/" data-fillr-id="1916438301" />
            <input type="hidden" value="fd2f040f1376a33be9718dd6dbefca0193224e33305b55e8ccdfa5fe13c86bc0" name="csrf_token" data-fillr-id="571063673" />

            <div id="servicetype" className="flex flex-col justify-content-center gap-3 mb-4 place-items-center place-content-center">
              <div className="btn-group btn-group-toggle assignment-type-tabs flex gap-5" data-toggle="buttons">
                <label className="btn btn-outline-primary rounded-left active">
                  <input type="radio" name="options" id="Writing" value="MzIyMTU4MC12NEtxLTQ3OTQzMTk=" data-fillr-id="496619262" data-fillr="bound" autoComplete="off" /> Writing
                </label>
                <label className="btn btn-outline-primary">
                  <input type="radio" name="options" id="Rewriting" value="MTgxMjg5MS14SmkyLTk0MjA2Mzg=" data-fillr-id="1847211206" data-fillr="bound" autoComplete="off" /> Rewriting
                </label>
                <label className="btn btn-outline-primary rounded-right">
                  <input type="radio" name="options" value="MzkwMzA3Ny10NFcyLTE3MTI5MzE=" id="Editing" data-fillr-id="992896134" data-fillr="bound" autoComplete="off" /> Editing
                </label>
              </div>
              <div className="assignment-type-info-wrapper">
                <img src="https://cdn1.myassignmenthelp.com/seo-revamp-assets/Info.svg" alt="question" width="20" height="20" className="question loading" title="Info" data-was-processed="true" />
                <div className="assignment-type-info-tooltip">
                  <p>
                    <strong>Writing:</strong> Get your essay and assignment written from scratch by PhD expert
                  </p>
                  <p>
                    <strong>Rewriting:</strong> Paraphrase or rewrite your friend's essay with similar meaning at reduced cost
                  </p>
                  <p>
                    <strong>Editing:</strong> Proofread your work by experts and improve grade at Lowest cost
                  </p>
                </div>
              </div>
            </div>


            {/*START ----- ENTRTIES ------ */}

            <div className="dark-div">
              <div className="dark-div col-12 col-md-6 pr-md-1">
                <div className="__input-box auto-signin">
                  <input type="email" name="Email" id="Email" className="form-control" placeholder="Email*" data-fillr-id="538746389" />
                </div>
              </div>
              <div className="dark-div col-12 col-md-6 pl-md-1">
                <div className="__input-box">
                  <input type="text" name="Name" id="Name" className="form-control" placeholder="Name*" data-fillr-id="2006230211" />
                </div>
              </div>
              <div className="dark-div col-12">
                <div className="__input-box">
                  <input type="text" name="Topic" id="Topic" className="form-control" placeholder="Essay Topic*" data-fillr-id="2099291191" />
                </div>
              </div>
              <div className="dark-div col-12">
                <div className="__input-box">
                  <textarea name="Requirements" id="Requirements" className="form-control" placeholder="Requirements*" data-fillr-id="832237785"></textarea>
                </div>
              </div>
              <div className="col-12">

             {/*END ----- ENTRTIES ------ */}


             {/*START ---- SUBMIT BUTTON ----- */}

              <button
                  type="submit"
                  name="submit"
                  id="submit"
                  className="__btn btn btn-primary w-100 mb-3"
                >
                  Submit Now
              </button>
              
             {/*END ----- SUVMIY BUTTON END ------ */}
              </div>
            </div>
          </form>
        </div>
      </section>
      </div>
    </>
  );
};
