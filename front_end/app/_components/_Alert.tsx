import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useStatus } from "../_contexts/StatusContext";
type TodoType = {
  deletingTodo: string;
  title: string;
  id: string;
  RemoveTodo: (title: string) => void;
  HandleMoveToTrash: () => void;
};
export function AlertDialogDemo(props: TodoType) {
  const { deletingTodo, title, RemoveTodo, HandleMoveToTrash, id } = props;
  const { inprogressStatus, setInprogressStatus } = useStatus();
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button onClick={() => RemoveTodo(id)} variant="outline">
          <Image
            alt="photo"
            src="trash.svg"
            //  onClick={() => RemoveTodo()}
            height={15}
            width={15}
          />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {inprogressStatus
              ? `Are you sure you want to delete "${title}"?`
              : `Are you sure you want to delete "${title}" from trash?`}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {/* This action cannot be undone. This will permanently delete your
            account and remove your data from our servers. */}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={HandleMoveToTrash}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
