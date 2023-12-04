This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started


1. install nextjs :
```bash
npx create-next-app@latest ./
```
- TypeScript : yes
- ESLint : no
- Tailwind CSS : yes
- `src/` directory : no
- App Router : yes
- customize the default import alias : no

2. install implementation :
```bash
npm npm install @clerk/nextjs @uploadthing/react mongoose svix uploadthing
```

3. jalankan next js
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Atur tailwind CSS
Copas tailwind css pada path app\globals.css dan tailwind.config.ts , setelah itu jalankan ulang dengan
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

5. jika diminta install animate tailwind css
```bash
npm npm install tailwindcss-animate
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Deploy User Management with Clerk

1. buka website https://clerk.com/
2. build apps user management with clerk
3. create file .env.local and copas key clerk

## Mengubah warna thema profile Clerk
1. jika anda ingin mengubah warna tema profile clerk dari putih ke hitam jalankan  
```bash
npm install @clerk/themes
```

