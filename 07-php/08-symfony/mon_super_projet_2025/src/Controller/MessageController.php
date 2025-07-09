<?php

namespace App\Controller;

use App\Entity\Message;
use App\Repository\MessageRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route("/message")]
final class MessageController extends AbstractController
{
    #[Route('/add', name: 'app_message_create')]
    public function createMessage(EntityManagerInterface $em): Response // EntityManagerInterface = ue no "use" kara kiteru
    {
        $message = new Message();
        $message->setContent("Ceci est un message de test")
                ->setCreatedAt(new \DateTimeImmutable());
        $em->persist($message);
        $em->flush();       
        return $this->render('message/index.html.twig', [
            'controller_name' => 'MessageController',
        ]);
    }

    #[Route("/{page<^\d+$>?1}/{nb<^\d+$>?5}", name: 'app_message_read')] //"/{page<^\d+$>?1}/{nb<^\d+$>?5}" 1ページに５つの記事を表示させる 1p = 5 article
    public function readMessage(MessageRepository $repo, $page, $nb): Response
    {
        // $messages = $repo->findAll();
        // *Paramètre 1 : WHERE, Paramètre 2 : ORDER BY
        // $messages = $repo->findBy([],["createdAt"=>"DESC"]); //日付順に表示
        // *Paramètre 3 : LIMIT, Paramètre 4: OFFSET

        $messages = $repo->findBy([],["createdAt"=>"DESC"], $nb,($page-1)*$nb); 

        // nombre total de message
        $total = $repo->count();

        // nombre de page :
        $nbPage = ceil($total / $nb);

        return $this->render('message/index.html.twig', [
            'listMessage' => $messages,
            "nbPage"=>$nbPage,
            "nombre"=>$nb,
            "currentPage"=>$page
        ]);
    }

    #[Route("/delete/{id<^\d+$>}", name: "app_message_delete")]
    public function deleteMessage(MessageRepository $repo, $id, EntityManagerInterface $em): Response
    {
        $message = $repo->find($id);
        if(!$message)
        {
            $this->addFlash("danger", "Aucun Message Correspondant");
        }
        else
        {
            $em->remove($message);
            $em->flush();
            $this->addFlash("success", "Votre message a été supprimé");
        }

        return $this->redirectToRoute("app_message_read");
    }

    #[Route("/update/{id<^\d+$>}", name: "app_message_update")]
    public function updateMessage(?Message $message, EntityManagerInterface $em): Response
    {
        if($message)
        {
            $message->setContent("Message Modifié")
                    ->setEditedAt(new \DateTime());
            $em->flush();
            $this->addFlash("success", "Message Mis à Jour");
        }
        else
        {
            $this->addFlash("danger", "Aucun message correspondant");
        }
        return $this->redirectToRoute("app_message_read");
    }
}
