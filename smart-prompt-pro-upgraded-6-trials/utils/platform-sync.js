export function syncPromptToPlatform(platformId,prompt){return chrome.runtime.sendMessage({type:'SP_SYNC_PLATFORM',platformId,prompt})}
