function toggleChatbot() {
  var chatbotContainer = document.getElementById('chatbotContainer');
  if (chatbotContainer.style.display === 'none' || chatbotContainer.style.display === '') {
    chatbotContainer.style.display = 'block';
  } else {
    chatbotContainer.style.display = 'none';
  }
}

function irAPagina(url) {
  window.location.href = url;
}
