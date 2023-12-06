function actualizaCacheDinamico(dynamicCache,req,res){
    if(res.ok){
        return caches.open(dynamicCache).then(cache=>{
            //Manda a la cache lo solicitado y lo respondido
            cache.put(req,res.clone());
            return res.clone();
        })
    }else{
        return res;
    }
}