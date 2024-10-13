function openModal(buttonNumber) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');

    
    modalTitle.textContent = `I am the modal window ${buttonNumber}`;
    
    
    modal.classList.remove('hidden');
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('hidden');
    modal.style.display = 'none';
}