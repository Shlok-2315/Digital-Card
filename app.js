const userInfo = {
  fullName: "Shlok Mukhi",
  title: "Entrepreneur in Residence",
  company: "Shiv Shakti Oxalate Pvt. Ltd.",
  email: "shlok@ssopl.co.in",
  phone: "+91 9769001508",
  website: "https://www.ssopl.co.in",
  bio: "Pioneers in Solvent Recycling",
  social: {
    linkedin: "https://www.linkedin.com/in/shlok-mukhi-15823sh/",
    github: "",
    twitter: "",
    whatsapp: "https://wa.me/919769001508"
  }
};

document.getElementById("fullName").textContent = userInfo.fullName;
document.getElementById("title").textContent = userInfo.title;
document.getElementById("company").textContent = userInfo.company;
document.getElementById("bio").textContent = userInfo.bio;
document.getElementById("email").textContent = userInfo.email;
document.getElementById("email").href = "mailto:" + userInfo.email;
document.getElementById("phone").textContent = userInfo.phone;
document.getElementById("website").textContent = userInfo.website.replace(/^https?:\/\//, '');
document.getElementById("website").href = userInfo.website;

document.getElementById("linkedin").href = userInfo.social.linkedin || "#";
document.getElementById("github").href = userInfo.social.github || "#";
if (document.getElementById("whatsapp")) document.getElementById("whatsapp").href = userInfo.social.whatsapp || "#";

/**
 * QR Code library loading and generation
 */
(function(){
  var script = document.createElement('script');
  script.onload = function() {
    new QRCode(document.getElementById("qr"), {
      text: userInfo.website,
      width: 120,
      height: 120,
      colorDark: "#206040",
      colorLight: "#fff"
    });
  };
  script.src = "https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js";
  document.head.appendChild(script);
})();

/**
 * vCard download functionality — one-tap contact saving for Android/iOS
 */
function downloadVCF() {
  const vcf = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:;${userInfo.fullName};;;`,
    `FN:${userInfo.fullName}`,
    `ORG:${userInfo.company}`,
    `TITLE:${userInfo.title}`,
    `EMAIL;type=INTERNET;type=WORK;type=pref:${userInfo.email}`,
    `TEL;type=WORK;type=VOICE:${userInfo.phone}`,
    `URL:${userInfo.website}`,
    'END:VCARD'
  ].join('
');
  const blob = new Blob([vcf], { type: "text/vcard" });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = userInfo.fullName.replace(/ /g, "_") + ".vcf";
  a.click();
}
