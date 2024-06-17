document.addEventListener('DOMContentLoaded', () => {
  const steps = document.querySelectorAll('.progress-step');
  const progress = document.getElementById('progress');
  const title = document.getElementById('title');
  const content = document.getElementById('content');
  const subscribeButton = document.getElementById('subscribe-newsletter');
  const modal = document.getElementById('modal');
  const closeModal = document.querySelector('.close');
  const contents = [
    {
      title : 'Personal Content',
      content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut etiam sit amet nisl purus. Mi proin sed libero enim sed faucibus turpis. Pharetra convallis posuere morbi leo urna molestie at elementum. Ut diam quam nulla porttitor massa id. Aliquam vestibulum morbi blandit cursus. Laoreet suspendisse interdum consectetur libero. Euismod in pellentesque massa placerat duis ultricies lacus sed turpis. Tellus elementum sagittis vitae et leo duis ut diam quam. Porttitor lacus luctus accumsan tortor posuere ac ut. Ultrices vitae auctor eu augue. Tincidunt augue interdum velit euismod.'
    },
    {
      title : 'Personal Content 2',
      content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut etiam sit amet nisl purus. Mi proin sed libero enim sed faucibus turpis. Pharetra convallis posuere morbi leo urna molestie at elementum. Ut diam quam nulla porttitor massa id. Aliquam vestibulum morbi blandit cursus. Laoreet suspendisse interdum consectetur libero. Euismod in pellentesque massa placerat duis ultricies lacus sed turpis. Tellus elementum sagittis vitae et leo duis ut diam quam. Porttitor lacus luctus accumsan tortor posuere ac ut. Ultrices vitae auctor eu augue. Tincidunt augue interdum velit euismod.'
    }, 
    {
      title : 'News Letter Agreement',
      content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut etiam sit amet nisl purus. Mi proin sed libero enim sed faucibus turpis. Pharetra convallis posuere morbi leo urna molestie at elementum. Ut diam quam nulla porttitor massa id. Aliquam vestibulum morbi blandit cursus. Laoreet suspendisse interdum consectetur libero. Euismod in pellentesque massa placerat duis ultricies lacus sed turpis. Tellus elementum sagittis vitae et leo duis ut diam quam. Porttitor lacus luctus accumsan tortor posuere ac ut. Ultrices vitae auctor eu augue. Tincidunt augue interdum velit euismod.'
    },
  ];
  
  let currentStep = 0;

  function updateProgress() {
      steps.forEach((step, index) => {
          if (index <= currentStep) {
              step.classList.add('active');
          } else {
              step.classList.remove('active');
          }
      });

      progress.style.width = (currentStep / (steps.length - 1)) * 100 + '%';
      // Update content based on the current step
      const currentContent = contents[currentStep];
      title.textContent = currentContent.title;
      content.textContent = currentContent.content;

      if (currentStep === 2) {
        subscribeButton.style.display = 'block';
      } else {
        subscribeButton.style.display = 'none';
      }
    }
    
    steps.forEach((step, index) => {
        step.addEventListener('click', () => {
            currentStep = index;
            updateProgress();
        });
    });

    subscribeButton.addEventListener('click', () => {
      modal.style.display = 'block';
    });

    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  
    updateProgress();
});

// copyright date
document.getElementById("year").innerHTML = (new Date().getFullYear());
