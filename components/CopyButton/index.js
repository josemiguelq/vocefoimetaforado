import styles from "../../styles/Home.module.css";
import Head from "next/head";

export default function CopyButton() {
    return (
        <button className="btn" data-clipboard-target="#foo">
            <img src="copy.svg" alt="Copy to clipboard" />
        </button>
    )
}
