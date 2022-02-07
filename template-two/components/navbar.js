// Link from NextJS
import Link from "next/link"

export default function Navbar() {
    return (
        <header>
            <nav class="navbar navbar-dark navbar-expand-lg navbar-light bg-primary">
                <div class="container-fluid">
                    <Link href="/">
                        <a class="navbar-brand">Logo / Name</a>
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <Link href="/about">
                                <a class="nav-link" aria-current="page" href="#">About us</a>
                            </Link>
                        </li>
                        <li class="nav-item">
                        <Link href="/contact">
                                <a class="nav-link" aria-current="page" href="#">Contact us</a>
                            </Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}