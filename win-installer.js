const path = require('path');
const electronInstaller = require('electron-winstaller');
const options = {
    appDirectory: './packages/win32-x64',
    outputDirectory: './packages/installer',
    authors: 'Narenthiran Y',
    exe: 'my-application.exe',
    setupExe: 'MyApplication.exe',
    setupMsi: 'MyApplication.msi',
    noMsi: true,
    // setupIcon: path.join(__dirname, './src/favicon.ico')
}

resultPromise = electronInstaller.createWindowsInstaller(options);
resultPromise.then(() => {
    console.log("The installers of your application were succesfully created !");
}, (e) => {
    console.log(`Well, sometimes you are not so lucky: ${e.message}`)
});