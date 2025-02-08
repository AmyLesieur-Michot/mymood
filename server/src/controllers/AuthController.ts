import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { User } from '../entities/User';
import { getUserByToken } from '../middlewares/AuthMiddlewares';

// Fonction pour récupérer tous les utilisateurs
export const getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        // Trouver tous les utilisateurs dans la base de données
        const users = await User.find();

        // Envoyer uniquement les `firm_name` des utilisateurs
        res.json(users.map((user) => user.first_name));
    } catch (error) {
        // Gestion des erreurs
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export async function login (req: Request, res: Response) {
    const { email, password } = req.body;
    const user = await User.findOne({
        where: {
            email: email
        }
    })
    if (!user) {
        res.status(403).send('test');
        return;
    } 

    if (!(await bcrypt.compare(password, user.password))) {
        res.status(403).send('test');
        return;
    } 

    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET environment variable is not defined");
    }

    // Générer le token JWT
    const token = jwt.sign({
        id: user.id
    }, process.env.JWT_SECRET, { expiresIn: '1h' }); // Le token expire après 1 heure

    // Définir le cookie avec SameSite et Secure
    res.cookie('token', token, {
        // httpOnly: true,  // Le cookie est accessible uniquement par le serveur (empêche JavaScript de l'accéder)
        // secure: process.env.NODE_ENV === 'production',  // Si en production, utilise un cookie sécurisé (via HTTPS)
        // sameSite: 'strict',  // Permet l'envoi du cookie dans un contexte cross-site (nécessaire pour certains scénarios)
        domain: process.env.NODE_ENV === 'production' ? '' : 'localhost',
        maxAge: 3600000   // Le cookie expire après 1 heure (en millisecondes)
    });

    // Répondre que l'authentification a réussi
    res.send(user);
}

// Fonction pour récupérer l'utilisateur actuel
export const getUser = async (req: Request, res: Response): Promise<void> => {
    try {
        // Vérification de la présence du cookie token dans la requête
        const token = req.cookies.token;
        if (!token) {
            res.sendStatus(401);  // Si pas de token, on renvoie un status 401
            return;
        }

        // Appel de la fonction pour récupérer l'utilisateur par le token
        const user = await getUserByToken(token);
        if (!user) {
            res.sendStatus(401);  // Si l'utilisateur n'existe pas, on renvoie un status 401
            return;
        }

        // Retour de l'utilisateur trouvé
        res.send(user);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');  // Si une erreur se produit, on envoie une erreur 500
    }
};

export function logout(req: Request, res: Response) {
    // Effacer le cookie 'token' avec les mêmes options qu'à la connexion
    res.clearCookie('token', {
        domain: process.env.NODE_ENV === 'production' ? '' : 'localhost',
    });

    res.send('Déconnexion réussie');
}

