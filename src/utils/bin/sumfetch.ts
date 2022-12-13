import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {
  if (config.ascii === 'cveinnt') {
    return `                                                  
             @@@@@@@@@@@@@                   sumfetch: summary display
        @@@@               @@@@             -----------
      @@                       @@            ABOUT
    @@                           @@          ${config.name}
  @@                               @@       ﰩ ${config.ps1_hostname}
 @@                         @@@     @@       <u><a href="${config.resume_url}" target="_blank">resume</a></u>
@@        @@@                        @@     爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
@@                                   @@     -----------
@@             .@@@@@@@@@@.          @@      CONTACT 
 @@           @@          @@        @@       <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
  @@           @@        @@        @@        <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
   @@             @@@@@@          @@         <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
     @@@                        @@@         -----------
        @@@                  @@@ @@          DONATE 
         @|  @@@@@@@@@@@@@@@@   @@           <u><a href="${config.donate_urls.paypal}" target="_blank">${config.donate_urls.paypal}</a></u>
         @|                      @@          <u><a href="${config.donate_urls.patreon}" target="_blank">${config.donate_urls.patreon}</a></u>

`;
  } else {
    return `

    ..,co88oc.oo8888cc,..
    o8o.               ..,o8889689ooo888o"88888888oooc..
  .88888             .o888896888".88888888o'?888888888889ooo....
  a888P          ..c6888969""..,"o888888888o.?8888888888"".ooo8888oo.
  088P        ..atc88889"".,oo8o.86888888888o 88988889",o888888888888.
  888t  ...coo688889"'.ooo88o88b.'86988988889 8688888'o8888896989^888o
   888888888888"..ooo888968888888  "9o688888' "888988 8888868888'o88888
    ""G8889""'ooo888888888888889 .d8o9889""'   "8688o."88888988"o888888o .
             o8888'""""""""""'   o8688"          88868. 888888.68988888"o8o.
             88888o.              "8888ooo.        '8888. 88888.8898888o"888o.
             "888888'               "888888'          '""8o"8888.8869888oo8888o .
        . :.:::::::::::.: .     . :.::::::::.: .   . : ::.:."8888 "888888888888o
                                                          :..8888,. "88888888888.
                      sumfetch                           .:o888.o8o.  "866o9888o
 ------------------------------------------------------     :888.o8888.  "88."89".
  ABOUT               CONTACT                           . 89  888888    "88":.
  ${config.name}      <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>                   :.     '8888o
 爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>    <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>          .       "8888..
  <u><a href="${config.resume_url}" target="_blank">resume</a></u>                                                            888888o.
                                                                      "888889,
                                                               . : :.:::::::.: :.
  
`
}
};

export default sumfetch;





// -----------
//  CONTACT 
//  <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
//  <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
//  <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
// -----------
//  DONATE 
//  <u><a href="${config.donate_urls.paypal}" target="_blank">${config.donate_urls.paypal}</a></u>
//   <u><a href="${config.donate_urls.patreon}" target="_blank">${config.donate_urls.patreon}</a></u>

// `