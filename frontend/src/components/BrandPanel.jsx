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
          <span className="material-symbols-outlined text-secondary text-4xl">local_library</span>
          <h1 className="font-headline-md text-headline-md font-bold tracking-tight text-surface-container-lowest">
            Central Library
          </h1>
        </div>
        <h2 className="font-headline-xl text-headline-xl text-surface-container-lowest leading-tight mb-4">
          Empowering <br />Discovery.
        </h2>
        <p className="font-body-lg text-body-lg text-on-primary-container max-w-sm">
          Access millions of resources, archives, and research databases from St. Jude University.
        </p>
      </div>
      <div className="relative flex items-center gap-4 bg-white/5 p-4 rounded-lg backdrop-blur-md border border-white/10">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-secondary">
          <img
            className="w-full h-full object-cover"
            alt="University administrator portrait"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDd2p9XAF2XaUJB2OQBIc5nWmUxSVHfwr4o2yN-EeujRJcY_xF1ruMB4gNy9AQwiQkhCb78RKByzVOjUXESJyJ0z8ZMApYDaDX8FWDyXV-MGIYR21rA-hUQlOOswed3InBjm0zrcwHPTEj2fMGgegRWeDa4yz2GGMJ6zqvmGCFIh9GsgS00ScZftWnKdd_Pl6gQ1hXF1YGjNvqWu7LwWuthf7tNFGppItdqYtXPqD6PnjQGaeUgMI3tcFFXlQMgQoN88h7KMvNa2i4"
          />
        </div>
        <div>
          <p className="font-label-md text-label-md uppercase tracking-wider text-secondary">
            Admin Portal
          </p>
          <p className="font-body-sm text-body-sm text-on-primary-fixed">
            St. Jude University Library
          </p>
        </div>
      </div>
    </div>
  )
}
