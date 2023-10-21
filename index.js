document.addEventListener('DOMContentLoaded', function () {

    const codeInput = document.getElementById('code-input');
    const copyButton = document.getElementById('copy-button');
    const lockButton = document.getElementById('lock-button');
    const saveButton = document.getElementById('save-button');

    const savedCode = localStorage.getItem('savedCode');
    if (savedCode) {
        codeInput.value = savedCode;
    }

    copyButton.addEventListener('click', function () {
        codeInput.select();
        document.execCommand('copy');
        alert('Text copied');
    });

    lockButton.addEventListener('click', function () {
        codeInput.disabled = !codeInput.disabled;
        if (codeInput.disabled) {
            lockButton.classList.add('locked');
            lockButton.textContent = 'Unlock';
           alert("Text locked");
        } else {
            lockButton.classList.remove('locked');
            lockButton.textContent = 'Lock';
            alert('Text unlocked');
        }
    });

    saveButton.addEventListener('click', function () {
        const codeToSave = codeInput.value;

        if (typeof Storage !== 'undefined') {
            localStorage.setItem('savedCode', codeToSave);
            alert('Code saved to local storage');
        } else {
            alert('Local storage is not supported in this browser.');
        }
    });
});