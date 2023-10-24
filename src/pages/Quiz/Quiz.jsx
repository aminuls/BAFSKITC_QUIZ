import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Container } from "@mui/material";
import "./Quiz.css";

const Item = styled(Paper)(({ theme }) => ({
   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
   ...theme.typography.body2,
   padding: theme.spacing(1),
   textAlign: "center",
   color: theme.palette.text.secondary,
}));
/* 
this section will repalced by fetch.
*/
// Start
const questions = [
   {
      id: "ITC01",
      question: "Total bits used by the IPv6 address is ____",
      opt1: "64 bit",
      opt2: "256 bit",
      opt3: "128 bit",
      opt4: "32 bit",
   },
   {
      id: "ITC02",
      question: "Identify the language which is mainly used for Artificial Intelligence",
      opt1: "Java",
      opt2: "J2EE",
      opt3: "Prolog",
      opt4: "C",
   },
   {
      id: "ITC03",
      question: "Why is a firewall used in a computer?",
      opt1: "Monitoring",
      opt2: "Data Transmission",
      opt3: "Authentication",
      opt4: "Security",
   },
   {
      id: "ITC04",
      question: "How many levels are there in the architecture of the database?",
      opt1: 2,
      opt2: 3,
      opt3: 4,
      opt4: 5,
   },
   {
      id: "ITC05",
      question: "Among the following which is not a database management software",
      opt1: "MySQL",
      opt2: "COBOL",
      opt3: "Sybase",
      opt4: "Oracle",
   },
   {
      id: "ITC06",
      question: "Choose the port number of FTP.",
      opt1: 23,
      opt2: 21,
      opt3: 110,
      opt4: 143,
   },
   {
      id: "ITC07",
      question: "UNIX is written in which language?",
      opt1: "C#",
      opt2: "C++",
      opt3: "C",
      opt4: ".Net",
   },
   {
      id: "ITC08",
      question: "Identify the different features of Big Data Analytics.",
      opt1: "Open Source",
      opt2: "Data Recovery",
      opt3: "Scalability",
      opt4: "All of the above",
   },
   {
      id: "ITC09",
      question: "Which of the following is an extension of image file?",
      opt1: ".mkv",
      opt2: ".gif",
      opt3: ".txt",
      opt4: ".vdf",
   },
   {
      id: "ITC10",
      question: "The main memory of a computer system is?",
      opt1: "Non-volatile",
      opt2: "Volatile",
      opt3: "Restricted",
      opt4: "Unrestricted",
   },
   {
      id: "ITC11",
      question: "Identify among the following servers which allow LAN users to share data.",
      opt1: "Communication Server",
      opt2: "Point Server",
      opt3: "Data Server",
      opt4: "File Server",
   },
   {
      id: "ITC12",
      question: "URL stands for ___________",
      opt1: "Uninterrupted Data Locator",
      opt2: "Uninterrupted Record Locator",
      opt3: "Uniform Record Locator",
      opt4: "Uniform Resource Locator",
   },
   {
      id: "ITC13",
      question: "SSL stands for ___________",
      opt1: "Secure Socket Layer",
      opt2: "Secure Secret Level",
      opt3: "Secure System Level",
      opt4: "Section Security Layer",
   },
   {
      id: "ITC14",
      question: "Which of the following is not a SQL command?",
      opt1: "DELETE",
      opt2: "ORDER BY",
      opt3: "SELECT",
      opt4: "WHERE",
   },
   {
      id: "ITC15",
      question: "Identify the range of byte data types in JavaScript",
      opt1: "-10 to 9",
      opt2: "-128 to 127",
      opt3: "-32768 to 32767",
      opt4: "-2147483648 to 2147483647",
   },
   {
      id: "ITC16",
      question: "Computer word size is a multiple of __ bits",
      opt1: "4 bits",
      opt2: "10 bits",
      opt3: "16 bits",
      opt4: "1024 bits",
   },
   {
      id: "ITC17",
      question: "Testing of program’s corporate is known as?",
      opt1: "System Testing",
      opt2: "Isolation Testing",
      opt3: "Pilot Testing",
      opt4: "Unit Testing",
   },
   {
      id: "ITC18",
      question: "Information in computer read-only memory stored by",
      opt1: "Engineer",
      opt2: "Programmer",
      opt3: "Manufacturer",
      opt4: "User",
   },
];

// End
const allInputName = [];
const handleSubmit = (e) => {
   e.preventDefault();
   const allAns = [];
   const form = e.target;
   allInputName.map((name) => allAns.push({ Ques_No: name, Ans: form[name].value }));
   console.log(allAns);
};
const Quiz = () => {
   return (
      <Container maxWidth="fixed">
         <Box sx={{ flexGrow: 1 }}>
            <form onSubmit={handleSubmit}>
               <Grid container rowSpacing={{ xs: 5, sm: 3 }} columnSpacing={{ xs: 0, sm: 3 }}>
                  {questions.map((ques) => (
                     <>
                        <Grid key={ques.id} xs={12} md={6}>
                           <Item elevation={6}>
                              <div className="w-full text-left p-2">
                                 <h2 className="text-xl sm:text-2xl border-b border-slate-500 pb-1">{ques.question || "demo"}</h2>
                                 <div>
                                    <Grid onChange={() => (allInputName.includes(ques.id) ? null : allInputName.push(ques.id))} container rowSpacing={{ xs: 1, sm: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginTop: "16px" }}>
                                       <Grid item xs={12} sm={6}>
                                          <Item elevation={4} sx={{ padding: 0 }}>
                                             <input type="radio" name={ques.id} id={Object.keys(ques)[2] + `${ques.id}`} value={ques.opt1 || "skipped"} />
                                             <label className="text-lg" htmlFor={Object.keys(ques)[2] + `${ques.id}`}>
                                                {ques.opt1 || "Option 1"}
                                             </label>
                                          </Item>
                                       </Grid>
                                       <Grid item xs={12} sm={6}>
                                          <Item elevation={4} sx={{ padding: 0 }}>
                                             <input type="radio" name={ques.id} id={Object.keys(ques)[3] + `${ques.id}`} value={ques.opt2 || "skipped"} />
                                             <label className="text-lg" htmlFor={Object.keys(ques)[3] + `${ques.id}`}>
                                                {ques.opt2 || "Option 2"}
                                             </label>
                                          </Item>
                                       </Grid>
                                       <Grid item xs={12} sm={6}>
                                          <Item elevation={4} sx={{ padding: 0 }}>
                                             <input type="radio" name={ques.id} id={Object.keys(ques)[4] + `${ques.id}`} value={ques.opt3 || "skipped"} />
                                             <label className="text-lg" htmlFor={Object.keys(ques)[4] + `${ques.id}`}>
                                                {ques.opt3 || "Option 3"}
                                             </label>
                                          </Item>
                                       </Grid>
                                       <Grid item xs={12} sm={6}>
                                          <Item elevation={4} sx={{ padding: 0 }}>
                                             <input type="radio" name={ques.id} id={Object.keys(ques)[5] + `${ques.id}`} value={ques.opt4 || "skipped"} />
                                             <label className="text-lg" htmlFor={Object.keys(ques)[5] + `${ques.id}`}>
                                                {ques.opt4 || "Option 4"}
                                             </label>
                                          </Item>
                                       </Grid>
                                    </Grid>
                                 </div>
                              </div>
                           </Item>
                        </Grid>
                     </>
                  ))}
                  <div className="quizSubmit">
                     <input type="submit" value="Submit" />
                  </div>
               </Grid>
            </form>
         </Box>
      </Container>
   );
};

export default Quiz;
