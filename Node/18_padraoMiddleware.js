const passo1= (ctx, next) =>{
    ctx.valor1= 'mid1'
    next()
}

const passo2 = (ctx, next)=>{
    ctx.passo2='mid2'
    next()
}

const passo3 = (ctx) =>ctx.passo3 = 'mid3'

const exec = (ctx, ...middlewares)=>{
    const execMiddleware = indice => {
        middlewares && indice < middlewares.length &&
            middlewares[indice](ctx, ()=> execMiddleware(indice + 1 ))
    }
    execMiddleware(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)