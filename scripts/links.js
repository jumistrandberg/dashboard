// Dialog functionality
// Get the dialog
const dialog = document.querySelector('dialog');
// Get the open dialog button (add link)
const addLinkBtn = document.getElementById('add-link-btn');
// Get the close dialog button
const dialogCloseBtn = document.getElementById('dialog-close-btn');
// Get the rest of the elements
const linkUrlInput = document.getElementById('link-url-input');
const linkName = document.getElementById('link-name');
const saveLinkBtn = document.getElementById('save-link-btn');
const linksContainer = document.getElementById('links-container');

// Open dialog when add link button is clicked
addLinkBtn.addEventListener('click', () => {
  dialog.showModal();
});

// Close dialog when close button is clicked
dialogCloseBtn.addEventListener('click', () => {
    console.log('close')
  dialog.close();
});

// Function to add a link to linksContainer
function addLink(url, name) {
    // Create link container div
    const linkDiv = document.createElement('div');
    linkDiv.classList.add('link-container');
  
    // Create link anchor
    const linkAnchor = document.createElement('a');
    linkAnchor.classList.add('link-element');
    linkAnchor.href = url;
    linkAnchor.textContent = name || url;
  
    // Create remove link icon
    const removeIcon = document.createElement('i');
    removeIcon.classList.add('fas', 'fa-times', 'remove-icon');
    removeIcon.setAttribute('title', 'Remove Link');
  
    // Append link and remove icon to the link container
    linkDiv.appendChild(linkAnchor);
    linkDiv.appendChild(removeIcon);
  
    // Append the link container to the linksContainer
    linksContainer.appendChild(linkDiv);
  
    // Listen for clicks on remove icon and remove the link
    removeIcon.addEventListener('click', () => {
      linkDiv.remove();
      removeLinkLocal(url);
      
    });
  }

// Function to enable add button if input conditions are met
function enableAddBtn() {
  const url = linkUrlInput.value;
  const name = linkName.value;

  // Check if inputs have value and enable button if they have
  if (url && name) {
    saveLinkBtn.disabled = false;
  } else {
    saveLinkBtn.disabled = true;
  }
}

// Listen for input changes
linkUrlInput.addEventListener('input', enableAddBtn);
linkName.addEventListener('input', enableAddBtn);

// Event listener for adding a link when the button is clicked
saveLinkBtn.addEventListener('click', () => {
  const url = linkUrlInput.value;
  const name = linkName.value;

  if (url && name) {
    addLink(url, name);
    // Call local storage save
    saveLinksLocal(url, name);

    // Empty input fields
    linkUrlInput.value = '';
    linkName.value = '';
  } else {
  }
});

// Function to save to local storage
function saveLinksLocal(url, name) {
  // Get saved links or create new array if none
  const linkArray = JSON.parse(localStorage.getItem('linkItem')) || [];

  // Push link
  linkArray.push({ url, name });

  // Save array in local storage
  localStorage.setItem('linkItem', JSON.stringify(linkArray));
}

// Function to show the links from local storage
function getStoredLinks() {
  const storedLinks = JSON.parse(localStorage.getItem('linkItem')) || [];

  storedLinks.forEach((link) => {
    addLink(link.url, link.name);
  });
}

// Function to remove link
function removeLinkLocal(url, name) {
  // Parse to object
  let storedLinks = JSON.parse(localStorage.getItem('linkItem')) || [];
  // Filter and remove relevant link
  storedLinks = storedLinks.filter((link) => link.url !== url);

  localStorage.setItem('linkItem', JSON.stringify(storedLinks));
}

enableAddBtn();
getStoredLinks();
