export default function BrandPanel() {
  return (
    <div className="relative hidden md:flex flex-col justify-between p-12 bg-primary-container text-on-primary">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          alt="Grand modern university library interior"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3nM09oo1250DjDDv5xpxE6DI-ryUGDk3Tus8XtJO-mzOyk_UpLi7m8HDOxcji0JCnAihNgwKHY-K__nfC3aGsTXLLYTLYlwlQZYzPjiIurXOp9Nzf9iYrfdN4CME1AYFhrjPW1blKcTEAetEMvLTu5wr5qh4XdBQ7tfS7JqVfHIRWEHE8snN6iBmIE6kDSH_tykKrkseiY1L2N_vDJ_tSG43Z8JR3Cn3wIfLV5vU0O8lyjQ0n3cXjyZNwbP7K3fr-GybxXhrfJiA"
        />
      </div>
      <div className="relative">
        <div className="flex items-center gap-2 mb-8">
          <img
            className="h-10 w-auto object-contain"
            alt="NSEC Logo"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAr8iA1tWQhR0uh0x3rIllnUe09Dubv8scuvYVTog0YDhF4EYfDJ0JufmwChyRqfhsTD6UTby_dgKJsSF_fiB40IHGOt12uVKTKiWgEy3aoev_vtZ-C2WPXlWK9H7SpJ12vvogBm9zH4EmMD94IfLV_s-2V5DK8m0pOTzxQGXr1ii1sRMXw-692wgK_201ZwUoNojFhApZnqm8zKnUhOwjHGmg30hU47t40tg_99WuerBTLQozGGvYZGFJdEttnNZm0td5JQHSA3UM"
          />
          <h1 className="font-headline-md text-headline-md font-bold tracking-tight text-surface-container-lowest">
            NSEC Library
          </h1>
        </div>
        <h2 className="font-headline-xl text-headline-xl text-surface-container-lowest leading-tight mb-4">
          Empowering <br />Discovery.
        </h2>
        <p className="font-body-lg text-body-lg text-on-primary-container max-w-sm">
          Access millions of resources, archives, and research databases from NSEC.
        </p>
      </div>
    </div>
  )
}
