// A generic onclick callback function.
chrome.contextMenus.onClicked.addListener(genericOnClick);

// A generic onclick callback function.
function genericOnClick(info) {
  switch (info.menuItemId) {
    case 'radio':
      // Radio item function
      console.log('Radio item clicked. Status:', info.checked);
      break;
    case 'checkbox':
      // Checkbox item function
      console.log('Checkbox item clicked. Status:', info.checked);
      break;
    default:
      // Standard context menu item function
      console.log('Standard context menu item clicked.');
  }
}

function init () {
  chrome.contextMenus.removeAll();

  const actionsParent = chrome.contextMenus.create({
    title: 'Actions',
    id: 'actions',
    type: 'normal',
    contexts: ['all'],
  });

  chrome.contextMenus.create({
    title: 'Hover',
    parentId: actionsParent,
    id: 'hover',
    type: 'normal',
    contexts: ['all'],
  });
  chrome.contextMenus.create({
    title: 'Focus',
    parentId: actionsParent,
    id: 'focus',
    type: 'normal',
    contexts: ['all'],
  });

  chrome.contextMenus.create({
    id: 'separator1',
    type: 'separator',
    contexts: ['all'],
  });

  const validationsParent = chrome.contextMenus.create({
    title: 'Validations',
    id: 'validations',
    type: 'normal',
    contexts: ['all'],
  });

  chrome.contextMenus.create({
    title: 'To be visible',
    parentId: validationsParent,
    id: 'to-be-visible',
    type: 'normal',
    contexts: ['all'],
  });
}

chrome.runtime.onInstalled.addListener(init);
chrome.runtime.onStartup.addListener(init);
chrome.runtime.onUpdateAvailable.addListener(init);
