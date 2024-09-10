const EMAILS = [
    {
        id : 1,
        incoming : true,
        from: "moshe.cohen@example.com",
        to: "user1234@example.com",
        title: "Meeting Reminder",
        body: "Shalom Sarah, I hope this email finds you well. Just a friendly reminder about our team meeting tomorrow at 2 PM in Conference Room B. We'll be discussing the quarterly results and planning for the upcoming Hanukkah marketing campaign. Please bring your ideas and any relevant reports. Looking forward to seeing you there!"
    },
    {
        id : 2,
        incoming : true,        
        from: "marketing@shalomsales.com",
        to: "user1234@shalomsales.com",
        title: "Exclusive Summer Sale!",
        body: "Dear valued customers, Get ready for an incredible summer with our exclusive sale! Enjoy up to 50% off on all summer items, from beachwear to picnic essentials. Don't miss out on our special collection of kosher BBQ supplies and sunscreen approved by Rabbi Steinberg. This limited-time offer ends soon, so hurry and start shopping now!"
    },
    {
        id : 3,
        incoming : true,
        from: "support@techmensch.com",
        to: "user1234@email.com",
        title: "Your Recent Support Ticket",
        body: "Shalom! We've received your support ticket regarding issues with your new smartphone. Our team of expert technicians, led by Avi Rosenberg, is working diligently to resolve your problem. We understand how important your device is and assure you we're treating this with utmost priority. Expect an update within the next 24 hours."
    },
    {
        id : 4,
        incoming : true,
        from: "newsletter@jewishnews.com",
        to: "user1234@email.com",
        title: "Weekly News Digest",
        body: "Dear readers, This week's top stories include: 1) New kosher restaurant opens in Brooklyn, receiving rave reviews, 2) Israeli tech startup revolutionizes water conservation efforts, 3) Local synagogue hosts interfaith dialogue event, promoting community unity, 4) Upcoming Jewish film festival announces star-studded lineup. Read more about these stories and other community events in our full newsletter."
    },
    {
        id : 5,
        incoming : true,
        from: "rachel.levine@company.com",
        to: "user1234@company.com",
        title: "Important Policy Update",
        body: "Dear colleagues, Please review the attached document for crucial updates to our company policies. These changes include new guidelines for remote work, an expanded parental leave policy, and updated procedures for requesting time off during Jewish holidays. If you have any questions, please don't hesitate to reach out to the HR department."
    },
    {
        id : 6,
        incoming : true,
        from: "events@jewishcommunity.org",
        to: "user1234@jewishcommunity.org",
        title: "Upcoming Charity Gala",
        body: "Shalom community members! We're excited to announce our annual charity gala, 'A Night of Tikkun Olam,' next month. Join us for an evening of dinner, dancing, and tzedakah as we raise funds for local education initiatives. Our guest speaker will be renowned author and philanthropist, David Shapiro. RSVP required by the 15th. We can't wait to see you there!"
    },
    {
        id : 7,
        incoming : true,
        from: "noreply@jewishconnect.com",
        to: "user1234@email.com",
        title: "New Friend Request",
        body: "Shalom! You have a new friend request from Esther Weinstein on JewishConnect. Esther shares your interest in Kabbalah studies and Jewish cooking. Why not check out her profile and consider accepting her request? Remember, building connections is an important part of our community!"
    },
    {
        id : 8,
        incoming : true,
        from: "billing@kosherservice.com",
        to: "user1234@email.com",
        title: "Your Monthly Invoice",
        body: "Dear valued customer, Your monthly invoice for KosherService is now available. This month's statement includes your regular subscription fee and the additional charge for the special Passover package you ordered. You can view the detailed breakdown and pay your bill by logging into your account. Thank you for your continued support of our service!"
    },
    {
        id : 9,
        incoming : true,
        from: "team@mitzvahproject.com",
        to: "user1234@mitzvahproject.com",
        title: "Project Update: Milestone Reached",
        body: "Shalom team! Great news! We've successfully completed phase 1 of the Mitzvah Project. Thanks to everyone's hard work, we've already helped 100 families in need. Special thanks to Deborah Fishman for coordinating the food drive and to Isaac Levy for organizing the volunteer schedule. Let's keep up this amazing momentum as we move into phase 2!"
    },
    {
        id : 10,
        incoming : true,
        from: "notifications@torahforum.com",
        to: "user1234@email.com",
        title: "New Reply to Your Post",
        body: "Shalom! There's been a new reply to your post in the 'Weekly Torah Portion' discussion forum. Rabbi Adina Goldberg has shared some insightful comments on your interpretation of last week's parshah. Head over to the forum to continue this enlightening discussion and deepen your understanding of the Torah."
    },
    {
        id : 11,
        incoming : true,
        from: "sales@menschmarket.com",
        to: "user1234@email.com",
        title: "Exclusive Offer for New Customers",
        body: "Shalom! As a new customer of MenschMarket, you're eligible for our special introductory offer. Enjoy 20% off your first order of our premium kosher products, including our award-winning challah and artisanal gefilte fish. Plus, sign up for our loyalty program and receive a free set of Shabbat candles with your next purchase. Start shopping now and taste the difference!"
    },
    {
        id : 12,
        incoming : true,
        from: "system@jewishapp.com",
        to: "user1234@email.com",
        title: "Security Alert: New Login",
        body: "Shalom, we detected a new login to your JewishApp account from an unfamiliar device. The login occurred from Tel Aviv, Israel at 3:45 PM local time. If this was you, no further action is needed. If you don't recognize this activity, please change your password immediately and contact our support team. Your account security is our top priority."
    },
    {
        id : 13,
        incoming : true,
        from: "courses@yeshivauniversity.edu",
        to: "user1234@yeshivauniversity.edu",
        title: "Course Registration Open",
        body: "Dear students, Registration for next semester's courses is now open. We're excited to offer new classes including 'Modern Hebrew Literature,' 'Jewish Ethics in Business,' and 'The History of Kabbalah.' Remember, popular courses like 'Introduction to Talmudic Law' with Professor Shlomo Goldberg fill up quickly, so register early! Contact your academic advisor if you need any assistance with course selection."
    },
    {
        id : 14,
        incoming : true,
        from: "support@shalomsoftware.com",
        to: "user1234@email.com",
        title: "Your Subscription is Expiring",
        body: "Shalom valued customer, This is a reminder that your subscription to ShalomSoftware will expire in 7 days. To ensure uninterrupted access to our suite of Jewish learning tools, including our popular Torah study app and Hebrew language software, please renew your subscription now. As a loyal customer, we're offering you a 15% discount on your renewal. Don't miss out on this offer!"
    },
    {
        id : 15,
        incoming : true,
        from: "travel@kosherjourney.com",
        to: "user1234@email.com",
        title: "Your Upcoming Trip Itinerary",
        body: "Shalom! We're excited about your upcoming kosher tour of Israel. Here's your detailed itinerary: Day 1: Arrival in Tel Aviv, welcome dinner at Shuk HaCarmel. Day 2: Tour of Jerusalem's Old City, including the Western Wall and Yad Vashem. Day 3: Float in the Dead Sea and visit Masada. Remember to pack comfortable walking shoes and modest clothing for holy sites. Safe travels!"
    },
    {
        id : 16,
        incoming : true,
        from: "library@jewishculture.org",
        to: "user1234@email.com",
        title: "Overdue Book Reminder",
        body: "Shalom! This is a friendly reminder that you have an overdue book: 'The Jews of New York' by Deborah Dash Moore. Please return it to the Jewish Cultural Center Library at your earliest convenience. Remember, other patrons may be waiting to read this popular title. If you need more time, you can renew the book online or by calling us. Thank you for supporting our community library!"
    },
    {
        id : 17,
        incoming : true,
        from: "recruiter@cohentechnologies.com",
        to: "user1234@email.com",
        title: "Interview Invitation",
        body: "Dear applicant, We're pleased to invite you for an interview for the position of Software Engineer at Cohen Technologies. Your experience with both programming and Judaic studies caught our attention. The interview will be conducted by our CTO, Zev Rosenberg, and will include a technical assessment and discussion about our company's mission to integrate technology with Jewish values. Please let us know your availability for next week."
    },
    {
        id : 18,
        incoming : true,
        from: "survey@jewishresearch.org",
        to: "user1234@email.com",
        title: "Feedback Request: Recent Synagogue Event",
        body: "Shalom! We hope you enjoyed the recent Purim celebration at Beth Israel Synagogue. Your feedback is crucial in helping us improve future events. Please take a moment to complete our survey, covering aspects such as the Megillah reading, the children's costume contest, and the quality of the hamantaschen. Your input will help us make next year's celebration even more joyous and meaningful. Thank you for your participation!"
    },
    {
        id : 19,
        incoming : true,
        from: "info@magentzedek.org",
        to: "user1234@email.com",
        title: "Thank You for Your Donation",
        body: "Dear generous supporter, Your recent donation to Magen Tzedek is truly making a difference. Thanks to your contribution, we've been able to provide kosher meals to 50 homebound seniors and support 10 families with emergency financial assistance this month. Your commitment to tikkun olam is inspiring. We've attached a detailed report showing how your donation is being used to bring light to our community. Todah rabah for your continued support!"
    },
    {
        id : 20,
        incoming : false,
        from: "user1234@email.com",
        to: "blabla@email.com",
        title: "New Features Available",
        body: "Shalom TorahSoftware users! We're excited to announce new features in our latest update. You can now customize your daily Torah study schedule, access an expanded library of commentaries, and use our new Hebrew-English translation tool. We've also improved the interface for mobile users. Update your app now to enjoy these enhancements and deepen your Torah learning experience!"
    },
    {
        id : 21,
        incoming : true,
        from: "noreply@hebrewnationalbank.com",
        to: "user1234@email.com",
        title: "Important: Account Statement",
        body: "Dear valued customer, Your monthly account statement for Hebrew National Bank is now available for review. This month's statement includes your recent transactions, including your donation to the local synagogue and purchases from Goldberg's Kosher Market. Please log in to your online banking portal to view the full statement. If you notice any discrepancies, please contact our customer service team immediately."
    },
    {
        id : 22,
        incoming : false,
        from: "user1234@email.com",
        to: "subscriber@email.com",
        title: "Your Digital Magazine is Here",
        body: "Shalom subscriber! The latest issue of Jewish Life Magazine is now available in your digital library. This month's highlights include an exclusive interview with Israeli author Etgar Keret, a feature on the revival of Yiddish theater in New York, and a special Rosh Hashanah recipe section. Don't miss our thought-provoking article on the intersection of Jewish ethics and modern technology. Happy reading!"
    },
    {
        id : 23,
        incoming : true,
        from: "notifications@maccabihealthcare.com",
        to: "user1234@email.com",
        title: "Appointment Reminder",
        body: "Shalom! This is a reminder of your upcoming appointment with Dr. Sarah Levine at Maccabi Healthcare tomorrow at 10:00 AM. Please remember to bring your insurance card and any relevant medical records. If you need to reschedule, please give us at least 24 hours notice. We look forward to providing you with excellent care!"
    }

];

// משתנה שזוכר את מצב התצוגה האחרון אצל המשתמש
let emailsToDisplay = '';

// פונקצייה ליצירת דיב עבור הודעת אימייל המתקבלת כפרמטר
const createEmailDiv = (status, emailObj) => {
    const DIV = document.createElement('div');
    DIV.classList.add('email');
    DIV.id = emailObj.id;

    if(status == 'incoming'){
        DIV.innerHTML = `
        <div class="header">
            <p class="showEmail">✉️Open</p>
            <p class="removeEmail">❌Delete</p>         
        </div>
        <div class="emailBody">
            <h3>From:  ${emailObj.from}</h3>
            <h3>Subject:  ${emailObj.title}</h3>
            <p>Message: ${emailObj.body} </p>
        </div>`
    }

    else if(status == 'outing'){
        DIV.innerHTML = `
        <div class="header">
            <p class = "showEmail">✉️Open</p>
            <p class = "removeEmail">❌Delete</p>         
        </div>
        <div class="emailBody">
            <h3>To:  ${emailObj.to}</h3>
            <h3>Subject:  ${emailObj.title}</h3>
            <p>Message: ${emailObj.body} </p>
        </div>`
    }


    return DIV
}


// פונקציה לעדכון תצוגת האימיילים
const updateEmailDisplay = () => {
    if(emailsToDisplay == 'incoming'){
        ShowIncomingEmail(EMAILS);
    }

    else if(emailsToDisplay == 'outing'){
        ShowOutgoingEmail(EMAILS);
    }

}


const addListeners = () => {
    document.querySelectorAll('.main .email').forEach(element => {
        const removeButton = element.querySelector('.removeEmail');
        const emailId = element.id;
        console.log(emailId);
        
        removeButton.addEventListener('click', (e) => {
            const index = EMAILS.findIndex(email => email.id == emailId);
            
            if (index !== -1) {
                EMAILS.splice(index, 1);
                element.remove(); // מסיר את האלמנט מה-DOM
                updateEmailDisplay(); // פונקציה היפותטית לעדכון תצוגת האימיילים
            } else {
                console.error('האימייל לא נמצא במערך');
            }
        });
    });
};

// פוקצייה לרנדור דואר נכנס
const ShowIncomingEmail = (arr) => {
    document.querySelector('.main').innerHTML = '';
    document.querySelector('.sendEmail').style.display = 'none';
    arr.forEach(element => {
        if(element.incoming == true){
            const emailDiv = createEmailDiv('incoming', element);
            document.querySelector('.main').appendChild(emailDiv);
        }      
    });
    emailsToDisplay = 'incoming';
    addListeners();
}

// פוקצייה לרנדור דואר יוצא
const ShowOutgoingEmail = (arr) => {
    document.querySelector('.main').innerHTML = '';
    document.querySelector('.sendEmail').style.display = 'none';
    arr.forEach(element => {
        if(element.incoming != true){
            const emailDiv = createEmailDiv('outing', element);
            document.querySelector('.main').appendChild(emailDiv);
        }      
    });
    emailsToDisplay = 'outing';
    addListeners();

}

// מאזין ללחצן הצגת הודעות נכנסות
document.querySelector('#incoming').addEventListener('click', () => {
    ShowIncomingEmail(EMAILS)
})

// מאזין ללחצן הצגת הודעות יוצאות
document.querySelector('#outing').addEventListener('click', () => {
    ShowOutgoingEmail(EMAILS)
})

// מאזין ללחצן כתיבת הודעה חדשה
document.querySelector('#newEmail').addEventListener('click', () => {
    document.querySelector('.sendEmail').style.display = 'flex';
})

// פונקצייה גנרית לסגירת חלון השליחה
const closeSendWindow = () => {
    const WINDOW = document.querySelector('.sendEmail');
    WINDOW.querySelectorAll('.context input, .context textarea').forEach(element => {
        element.value = '';
    })
    WINDOW.style.display = 'none';
}
// מאזין ללחצן סגירת הודעה חדשה
document.querySelector('#closeSendWindow').addEventListener('click', () => {
    closeSendWindow(); 
})

// מאזין ללחצן שליחת הודעה
document.querySelector('#confirmSend').addEventListener('click', () => {
    const NEW_EMAIL = {
        id: EMAILS.length + 1,
        incoming: false,
        to: document.querySelector('#address').value,
        title: document.querySelector('#title').value,
        body: document.querySelector('#textMessage').value
    }
console.log(NEW_EMAIL)

    EMAILS.push(NEW_EMAIL);
    updateEmailDisplay();
    closeSendWindow(); 
});

ShowIncomingEmail(EMAILS);