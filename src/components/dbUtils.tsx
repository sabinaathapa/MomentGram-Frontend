async function openDatabase(): Promise<IDBDatabase> {
    return new Promise((resolve, reject)=>{
        const request = indexedDB.open("myJWTDatabase", 1);

        request.onerror = ()=>reject(request.error);
        request.onsuccess = ()=>resolve(request.result);

        request.onupgradeneeded = (event)=>{
            const db = event.target.result;
            db.createObjectStore('token', {keyPath: 'id', autoIncrement: true});
        } ;
       });  
}

async function storeToken(token: string){
    const db = await openDatabase();

    const tx = db.transaction('tokens','readwrite');
    tx.objectStore('tokens').add({token});
    await tx.complete;
    db.close();
}

async function retrieveToken(): Promise<string | null>{
    const db = await openDatabase();

    return new Promise((resolve)=>{
        const tx = db.transaction('tokens','readonly');
        const store = tx.objectStore('tokens');
        const request = store.get(1);
        request.onsuccess = ()=> {
            const token = request.result.length > 0? request.result.token : null;
            resolve(token);
        };
        db.close();
    
    });
}
export {storeToken, retrieveToken};
