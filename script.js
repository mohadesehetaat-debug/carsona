function showResult() {
  let total = 0;
  for (let i = 1; i <= 5; i++) {
    const answer = document.querySelector(input[name="q${i}"]:checked);
    if (!answer) {
      alert("لطفاً به همه سوالات پاسخ دهید.");
      return;
    }
    total += parseInt(answer.value);
  }

  let resultText = "";
  if (total <= 5) {
    resultText = "ماشین مناسب شما: کلاسیک، نرم و اقتصادی مثل پژو ۲۰۶ یا تویوتا یاریس.";
  } else if (total <= 10) {
    resultText = "ماشین مناسب شما: اسپرت و سریع مثل مزدا ۳ یا کیا سراتو.";
  } else if (total <= 15) {
    resultText = "ماشین مناسب شما: خشن، پرقدرت و خاص مثل موستانگ یا شورولت کامارو.";
  }

  document.getElementById("result").innerText = resultText;
}
