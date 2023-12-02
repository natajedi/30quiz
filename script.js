document.querySelector('.quiz__next-button').addEventListener('click', function() {
    // Получить выбранные ответы
    const answers = document.querySelectorAll('.quiz__answers-input');
    const selectedAnswers = Array.from(answers).filter(input => input.checked);
   
    // Отправить POST-запрос на сервер
    fetch('/calculate-result', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        answers: selectedAnswers.map(input => ({
          questionId: input.name,
          answerId: input.value,
        })),
      }),
    })
    .then(response => response.json())
    .then(data => {
      // Обновить счетчик правильных ответов
      document.querySelector('.quiz__score').textContent = data.score;
    });
   });
   