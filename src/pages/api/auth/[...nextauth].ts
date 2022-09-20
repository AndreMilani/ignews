import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'


export default NextAuth({
    
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            scope: 'read:user'
        }),
    ],

})

  
function GithubProvider(arg0: { clientId: string; clientSecret: string; scope: string }): Providers.Provider {
    throw new Error('Function not implemented.')
}

