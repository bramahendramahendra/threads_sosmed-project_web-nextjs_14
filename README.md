This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## requirements :
1. Nextjs 14.0.3
2. Mongo DB 8.0.2
3. React 
4. Tailwind CSS 3.3.0

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

## install https://ui.shadcn.com/

digunakan untuk UI form reference pada 
https://ui.shadcn.com/docs/components/form (referensi form)
https://ui.shadcn.com/docs/installation/next (referensi install)

cara menggunakan : 
1.  install 
```bash
npx shadcn-ui@latest add form
```
2. muncul procced tekan : y
3. jika muncul pesan 'Configuration is missing. Please run init to create a components.json file.' maka perlu menginstall ini
4. Run CLI init
```bash
npx shadcn-ui@latest init
```
5. muncul message pertanyaan perikut:
Would you like to use TypeScript (recommended)? no / {yes}
Which style would you like to use? › {Default}
Which color would you like to use as base color? › {Slate}
Where is your global CSS file? › › app/globals.css
Do you want to use CSS variables for colors? › {no} / yes
Where is your tailwind.config.js located? › tailwind.config.js
Configure the import alias for components: › @/components
Configure the import alias for utils: › @/lib/utils
Are you using React Server Components? › no / {yes}
Write configuration to components.json. Proceed? ... {yes}
6. ulangi install form UI
```bash
npx shadcn-ui@latest add form
```
7. jika components "@/components/ui/input" belum terinstall anda dapat menginstallnya terlebih dahulu
```bash
npx shadcn-ui@latest add input
```
8. jika components "@/components/ui/textarea" belum terinstall anda dapat menginstallnya terlebih dahulu
```bash
npx shadcn-ui@latest add textarea
```

## Tutorial MongoDB

1. buka link berikut
https://www.mongodb.com/ 
2. start Free dan daftar mongo DB atau login MongoDB
3. ikuti langkah pada dolumen berikut.
https://docs.google.com/document/d/1bh2_QUpJQRsVkbVNEv00ZselW_sUG0TMYbpILnB1eOQ/edit?usp=sharing

## Tutorial setting Uploadthing
1. buka link berikut
https://uploadthing.com/sign-in?redirect_url=https%3A%2F%2Fuploadthing.com%2Fdashboard
2. ikuti langkan pada dokumen berikut.
https://docs.google.com/document/d/1QZJ--5NBRdxv-jt8k512MjT15bkJTE_f7hBQsWw9pfE/edit?usp=sharing
 
