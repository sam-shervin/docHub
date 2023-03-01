import "../../css/headings.css";

export const new_tab = (document: any) => {
    return (
        document.querySelectorAll("div #con a").forEach((item : any) => item.setAttribute('target', '_blank'))
    );
  };

export const content_selector = (document: any) => {
    let content:string = ''
    return (
        <script src="https://smtpjs.com/v3/smtp.js"/>
        <script type="text/javascript">
        document.querySelectorAll('div .cledit-section span').forEach((item: any)=> content.concat(String(item.innerText))
        function sendEmail() {
            Email.send({
                Host: "smtp.gmail.com",
                Username: "sender@email_address.com",
                Password: "Enter your password",
                To: 'receiver@email_address.com',
                From: "sender@email_address.com",
                Subject: "Content Submission - DocHub",
                Body: {content},
             })
        .then(function (message) {
          alert("mail sent successfully")
        });
    }
            </script>
);
  };
  
