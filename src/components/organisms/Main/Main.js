import React from 'react'
import { CopyBlock, dracula } from "react-code-blocks";

import Box from 'components/organisms/Box/Box'
import styles from './Main.module.scss'
import FormField from 'components/molecules/FormField/FormField'
import Button from 'components/atoms/Button/Button';

import { generateMetaTags } from 'utils/metatags';
import { validateForm } from 'utils/validateForm';

const Main = () => {
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [author, setAuthor] = React.useState('');
    const [url, setUrl] = React.useState('');
    const [ready, setReady] = React.useState(false);
    const [tags, setTags] = React.useState('');
    const [errors, setErrors] = React.useState({});
    
    const generate = () => {
        if (validateForm(title, author, description, url) === true) {
            setTags(generateMetaTags(title, description, author, url));
            setReady(true);
        } else {
            setErrors(validateForm(title, author, description, url));
        }
    }

    const backToHome = () => {
        setReady(false);
        setTitle('');
        setDescription('');
        setAuthor('');
        setUrl('');
        setErrors({});
    }

  return (
    <div className={styles.wrapper}>
        <Box>
            <h1 className={styles.title}>Genera i meta tag</h1>

            {!ready ? (
                <div>
                    <FormField 
                        label="Titolo sito"
                        placeholder="Il mio sito"
                        value={title}
                        onChange={setTitle}
                    />
                    {errors.title && <p className={styles.error}>Inserisci un titolo</p>}

                    <FormField
                        label="Autore"
                        placeholder="@laka9"
                        value={author}
                        onChange={setAuthor}
                    />
                    {errors.author && <p className={styles.error}>Inserisci un autore</p>}

                    <FormField
                        label="URL Sito"
                        placeholder="https://miosito.com"
                        value={url}
                        onChange={setUrl}
                    />
                    {errors.url && <p className={styles.error}>Inserisci un url</p>}

                    <FormField
                        label="Descrizione"
                        placeholder="Descrizione del sito"
                        value={description}
                        onChange={setDescription}
                        isArea
                    />
                    {errors.description && <p className={styles.error}>Inserisci una descrizione</p>}

                    <div className={styles.buttons}>
                        <Button onClick={generate}>Genera</Button>
                    </div>
                </div>
            ) : (
                <div>
                    <CopyBlock
                        language={'html'}
                        text={tags}
                        showLineNumbers={true}
                        theme={dracula}
                        wrapLines
                        codeBlock
                    />
                     <div className={styles.buttons}>
                        <Button onClick={backToHome}>Genera un altro meta tag</Button>
                    </div>
                </div>
            )}
        </Box>
    </div>
  )
}

export default Main